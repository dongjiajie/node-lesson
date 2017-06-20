## remove docker containers
```
$ docker rm $(docker ps -a -q)
```

## remove docker images
```
$ docker rmi $(docker images | grep -E 'none(name)' | awk '{print $3}')
```