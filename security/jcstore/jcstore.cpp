#include <iostream>


int main(int argc, char* argv[]) {
    //open and read a text file into memory
    FILE* f = fopen("test.txt", "r");
    if (f == NULL) {
        printf("Error opening file\n");
        return 1;
    }

    return 0;
}

