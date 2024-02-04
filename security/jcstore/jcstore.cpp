#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <string>
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
    FILE * keyFile = fopen("key.txt", "r");
    if (keyFile == NULL) {
        printf("Error opening key file\n");
        return 1;
    }
    fread(key, 1, 16, keyFile);
    fclose(keyFile);

    WORD key_schedule[45];
    aes_key_setup(key,key_schedule,128);
    printKeySchedule(key_schedule, 44);
    //open and read a text file into memory and encrypt it
    using namespace std;
    if (argc != 2) {
        printf("Usage: %s <filename>\n", argv[0]);
        return 1;
    }

    string fileName = argv[1];
    FILE* f = fopen(fileName.c_str(), "r");
    if (f == NULL) {
        printf("Error opening file\n");
        return 1;
    }

    return 0;
}

