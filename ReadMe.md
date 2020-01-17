# Dockerizing Node  



```sh
$ 
  'docker ps'
  
  'docker images'
  
  'docker logs conatinerID'
  
  'docker build -t hello .'
  
  'docker run -p 4200:6009 hello'
  
  'sudo docker run -i -t alpine /bin/bash'
  
  'docker rm $(docker ps -a -f status=exited -q)'
  
  'docker ps -a -f status=exited -f status=created'

For Termination || Remove  Image 
Stop image then you can Remove Docker Image
 
  'docker stop ContainerID'
  
  'docker rm ContainerID'

```

