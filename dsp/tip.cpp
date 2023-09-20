#include <iostream>
#include <string>
#include <stdlib.h>

int main(int argc, char **argv) {
	if (argc < 2) {
		std::cerr << "Not enough arguments" << std::endl;
		return 1;
	}
	
	unsigned long rawIP = strtoul(argv[1], nullptr, 36);
	
	unsigned long ipBytes[4];
	ipBytes[0] = (rawIP & 0xFF000000) >> 24;
	ipBytes[1] = (rawIP & 0x00FF0000) >> 16;
	ipBytes[2] = (rawIP & 0x0000FF00) >> 8;
	ipBytes[3] = (rawIP & 0x000000FF);
	
	std::string ipAddress;
	ipAddress = std::to_string(ipBytes[0]) + ".";
	ipAddress += std::to_string(ipBytes[1]) + ".";
	ipAddress += std::to_string(ipBytes[2]) + ".";
	ipAddress += std::to_string(ipBytes[3]);
	
	std::cout << "IP Address: " << ipAddress << std::endl;
	return 0;
}