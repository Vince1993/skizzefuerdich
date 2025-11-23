import os
os.getcwd()
collection = "/home/vincent/Desktop/getasketch/media/"
for i, filename in enumerate(os.listdir(collection)):
    os.rename(collection + filename, collection + "sketch" + str(i) + ".png")
