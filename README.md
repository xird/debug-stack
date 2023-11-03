# Debugging CDK launch template name

```
yarn install
yarn build
yarn cdk deploy --exclusively BastionTestStack
```

Result: Error stating "Launch template name already in use".

Expected result: Stack creates two bastion hosts with differently named launch templates.

Deploying the stack with one of the bastion hosts commented out results in the one bastion host being created, with a launch template called "ResourceLaunchTemplate". Since there's clearly nothing variable in the name, the next bastion host would have the same launch template name, and the creation fails.

To clean up and try again:

```
yarn clean
```
