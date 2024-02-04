#! /usr/bin/env python3

import os
import binascii

key = os.urandom(16)
key = binascii.hexlify(key)

with open('key.txt', 'wb') as f:
    f.write(key)

