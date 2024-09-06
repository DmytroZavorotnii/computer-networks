import { Injectable } from '@nestjs/common';

@Injectable()
export class Lab1Service {
    process(ipAddress: string) {
        const octets = ipAddress.split('.').map(Number);

        if (
            octets.length !== 4 ||
            octets.some((octet) => octet < 0 || octet > 255)
        ) {
            alert('Невірна IP-адреса. Введіть коректну IP-адресу.');
            return;
        }

        const firstOctet = octets[0];
        let networkClass = '';
        let maxHosts: number | string = 0;

        if (firstOctet >= 1 && firstOctet <= 126) {
            networkClass = 'A';
            maxHosts = Math.pow(2, 24) - 2; // 2^24 - 2 хости
        } else if (firstOctet >= 128 && firstOctet <= 191) {
            networkClass = 'B';
            maxHosts = Math.pow(2, 16) - 2; // 2^16 - 2 хости
        } else if (firstOctet >= 192 && firstOctet <= 223) {
            networkClass = 'C';
            maxHosts = Math.pow(2, 8) - 2; // 2^8 - 2 хости
        } else if (firstOctet >= 224 && firstOctet <= 239) {
            networkClass = 'D (Multicast)';
            maxHosts = 'Not using';
        } else if (firstOctet >= 240 && firstOctet <= 255) {
            networkClass = 'E (Reserved)';
            maxHosts = 'Not using';
        } else {
            networkClass = 'Undefined class';
        }

        const binaryIp = octets
            .map((octet) => {
                return ('00000000' + octet.toString(2)).slice(-8);
            })
            .join('.');

        return {
            networkClass: networkClass,
            maxHosts: maxHosts,
            binaryIp: binaryIp,
        };
    }
}
