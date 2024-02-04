XX = g++
CC = gcc
CXXFLAGS = -g -Wall -std=c++11
CFLAGS = -g -Wall
EXECUTABLE = jcstore
CPPFLAGS = -I./crypto-algorithms

# Add the .c source files here
C_SOURCES = crypto-algorithms/aes.c crypto-algorithms/sha256.c 

# Convert the .c filenames to .o to get the object files
C_OBJECTS = $(C_SOURCES:.c=.o)
all: $(EXECUTABLE)
$(EXECUTABLE): jcstore.o $(C_OBJECTS)
	$(CXX) $(CXXFLAGS) jcstore.o $(C_OBJECTS) -o $(EXECUTABLE)

# Rule to compile the C++ source file
jcstore.o: jcstore.cpp
	$(CXX) $(CXXFLAGS) $(CPPFLAGS) -c jcstore.cpp

# Rule to compile C source files
%.o: %.c
	$(CC) $(CFLAGS) $(CPPFLAGS) -c $< -o $@

run: $(EXECUTABLE)
	./$(EXECUTABLE)

clean:
	rm -f $(EXECUTABLE) *.o crypto-algorithms/*.o
