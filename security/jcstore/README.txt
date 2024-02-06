# TO DO

1. Parser commands for add, delete, list, and update.
2. Hash of passwords will be stored inline with the respective file. Yet to 
    be implemented.
3. Add must read the file into memory, encrypt it with 10,000 rounds of 
    SHA-256, and write it back to the a new file in the archive with a 
    unique file ID (filename)
4. Delete must remove the file from the archive, and clear the respective entry 
    from the password hash.
5. List must list all the files in the archive.
6. Update must read the file into memory, encrypt it with 10,000 rounds of 
    SHA-256, and write it back to the a new file in the archive with a 
    unique file ID (filename). The old file must be deleted from the archive.
    Maybe could use add for this. 
7. Rotation script to rotate the keys (bonus)
