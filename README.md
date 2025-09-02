# Sam Hopper's Website

A personal website showcasing projects and professional experience.

## Deployment

This website is automatically deployed to AWS S3 using GitHub Actions and OpenID Connect (OIDC) for secure authentication.

### Setup Instructions

1. **AWS IAM Setup**:
   - Create an IAM Role for GitHub Actions
   - Configure OpenID Connect identity provider in AWS IAM
   - Attach policies for S3 access (and optionally CloudFront)

2. **GitHub Secrets**:
   Add the following secrets to your GitHub repository:
   - `AWS_ROLE_ARN`: The ARN of the IAM role created for GitHub Actions
   - `AWS_REGION`: Your AWS region (e.g., `us-east-1`)
   - `S3_BUCKET_NAME`: The name of your S3 bucket
   - `CLOUDFRONT_DISTRIBUTION_ID`: (Optional) CloudFront distribution ID for cache invalidation

3. **IAM Role Trust Policy Example**:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Principal": {
           "Federated": "arn:aws:iam::YOUR_AWS_ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com"
         },
         "Action": "sts:AssumeRole",
         "Condition": {
           "StringEquals": {
             "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
           },
           "StringLike": {
             "token.actions.githubusercontent.com:sub": "repo:YOUR_GITHUB_USERNAME/YOUR_REPO_NAME:*"
           }
         }
       }
     ]
   }
   ```

4. **IAM Role Permissions Policy**:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "s3:PutObject",
           "s3:PutObjectAcl",
           "s3:GetObject",
           "s3:DeleteObject",
           "s3:ListBucket"
         ],
         "Resource": [
           "arn:aws:s3:::YOUR_BUCKET_NAME",
           "arn:aws:s3:::YOUR_BUCKET_NAME/*"
         ]
       },
       {
         "Effect": "Allow",
         "Action": [
           "cloudfront:CreateInvalidation"
         ],
         "Resource": "*"
       }
     ]
   }
   ```

### Deployment Process

- **Automatic**: Push to `main` branch triggers deployment
- **Manual**: Create a pull request to test the workflow

### Local Development

Simply open `index.html` in your browser to view the website locally.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- AWS S3 (hosting)
- GitHub Actions (CI/CD)
- AWS IAM OpenID Connect (authentication)

