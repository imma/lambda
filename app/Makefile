update:
	yarn pack
	rm -rf package
	tar xvfz $(shell cat package.json  | jq -r '"\(.name)-v\(.version).tgz"')
	cd package && yarn install --production
	cd package && tar cvfz ../deployment.zip .
