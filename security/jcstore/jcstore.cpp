#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <string>
#include <cstring>
extern "C" {
#include "aes.h"
#include "sha256.h"
}

typedef unsigned char BYTE;
typedef unsigned int WORD;

void printKeySchedule(const WORD keySchedule[], int nWords) {
    for(int i = 0; i < nWords; i++) {
        if(i % 4 == 0) std::cout << std::endl; 
        std::cout << std::hex << keySchedule[i] << " ";
    }
    std::cout << std::endl;
}
int main(int argc, char* argv[]) {
    BYTE key[16];
    SHA256_CTX ctx;
    sha256_init(&ctx);
    FILE * keyFile = fopen("key.txt", "r");
    if (keyFile == NULL) {
        printf("Error opening key file\n");
        return 1;
    }
    fread(key, 1, 16, keyFile);
    fclose(keyFile);

    WORD key_schedule[45];
    aes_key_setup(key,key_schedule,128);
    //printKeySchedule(key_schedule, 44);
    //open and read a text file into memory and encrypt it
    using namespace std;
    if (argc <= 2) {
        printf("Usage: list/add/extract/delete [-p password] %s <filename>\n", argv[0]);
        return 1;
 }
    //if password is entered:
        if (strcmp(argv[2], "-p") != 0) {
            printf("Usage: list/add/extract/delete [-p password] %s <filename>\n", argv[0]);
            return 1;
        } else {
        string password = argv[3];
        //hash the password 10,000 times
        BYTE hash[32];
        sha256_update(&ctx, (BYTE*) password.c_str(), password.length());
        sha256_final(&ctx, hash);
        for(int i = 0; i < 10000; i++) {
            sha256_init(&ctx);
            sha256_update(&ctx, hash, 32);
            sha256_final(&ctx, hash);
        }
        //print the hash
        for(int i = 0; i < 32; i++) {
            printf("%02x", hash[i]);
        }
        printf("\n");
    }

    string fileName = argv[1];
    FILE* f = fopen(fileName.c_str(), "r");
    if (f == NULL) {
        printf("Error opening file\n");
        return 1;
    }

    return 0;
}

