# ChangeMoment AWS test environment

The test environment uses one Amazon Lightsail WordPress instance in
`ca-central-1`. WordPress is the headless CMS and the static React build is
served from the same instance. This keeps publishing and rollback local to one
small, predictable-cost service during evaluation.

## Cost boundary

- Instance bundle: `micro_3_0` (USD 7/month list price)
- Account budget: USD 10/month
- Account plan at provisioning time: AWS Free Plan with credits

## Security boundary

- Root bootstrap created the account budget, Lightsail resources, and the
  `ChangeMomentDeploymentRole`. AWS does not allow a root principal to assume
  a role, so the role is ready for a future IAM Identity Center administrator;
  this bootstrap run remained on the temporary `aws login` root session.
- Routine publishing runs locally on the instance as a restricted systemd
  service and does not require stored AWS credentials.
- No AWS or WordPress credentials are stored in this repository or browser code.
- WordPress rich text is sanitized before it is exposed to the frontend.
