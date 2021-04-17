.PHONY: all build run stop clean
.DEFAULT_GOAL:= all

all: build run

build:
	docker build -t koushiksahu/portfolio:latest .

run:
	docker run -p 3000:3000 --name portfolio -it koushiksahu/portfolio:latest 

stop:
	docker stop portfolio
	docker rm portfolio

clean:
	docker rmi koushiksahu/portfolio:latest

