up:
		docker-compose up -d
stop:
		docker-compose stop
work:
		docker-compose exec node bash
serve:
		docker-compose exec node bash -c "cd angular-app && ng serve --host 0.0.0.0"
serve-stop:
		docker-compose exec node bash -c "cd angular-app && pkill -e ng"