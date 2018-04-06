test:
	claudia test-lambda

deploy:
	claudia update --set-env-from-json env.json --version rc

start:
	claudia create --region us-east-1 --handler app.app --name defn1 --role arn:aws:iam::$(shell aws sts get-caller-identity | jq -r .Account):role/adm0-executor

destroy:
	claudia destroy
