#!/bin/bash

if [ "$1" = "1" ]; then 
  ssh -i swarm-instances.pem azureuser@20.162.122.67
elif [ "$1" = "2" ]; then 
  ssh -i swarm-instances.pem azureuser@20.162.75.205
elif [ "$1" = "3" ]; then 
  ssh -i swarm-instances.pem azureuser@20.254.228.69
fi
