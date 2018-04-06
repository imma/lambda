test:
	claudia test-lambda

deploy:
	claudia update --set-env-from-json env.json --version rc --keep

create:
	rm -f claudia.json
	claudia create --set-env-from-json env.json --version rc --keep --handler app.app --name defn0 --role arn:aws:iam::$(shell aws sts get-caller-identity | jq -r .Account):role/adm0-executor --region us-east-1

destroy:
	claudia destroy
