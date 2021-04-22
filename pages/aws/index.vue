<template>
  <main role="main" class="page-content aws-main">
    <section class="introduction-section">
      <div class="introduction-inner-section">
        <div class="container introduction-container">
            <div class="introduction-content">
              <h1 class="introduction-title">AWS</h1>

              <p class="introduction-body">56Bit provides peace of mind to technology-driven business through best-in-class AWS solutions. </p>
              <p class="introduction-body">We provide highly-qualified experts who consult, design, build and/or maintain complex cloud architectures on AWS, working hand-in-hand with your software development teams. </p>
              <p class="introduction-body">We have a long track record of successfully delivering projects involving the below AWS technologies.</p>
            </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container content-container">
        <h2 class="content-title">AWS Consultancy Practice</h2>

        <img src="~/assets/images/badges/aws-consulting-partner.png" alt="AWS Consulting Partner">

        <div class="content">
          <span class="sub-title">Infrastructure as Code</span>
          <p class="content-part">All solutions we deliver are built with IaC powered by AWS Cloudformation. This gives us the benefit of treating the infrastructure just like any other software code, with the ability to modularize, re-use and version control the individual AWS components. This allows us to recreate environments from scratch within minutes, as well as create environments on the fly as part of a CI/CD pipeline.</p>
        
          <span class="sub-title">Serverless</span>
          <p class="content-part">Our engineers have been working on Serverless environments before serverless became a thing! From Lambda to API Gateway to SQS, SNS, S3 and Step Functions, the AWS serverless portfolio has grown exponentially in both maturity and complexity. We have helped many customers navigate the complete Serverless portfolio of services to achieve cost-efficiencies, scalability, high-availability and fault tolerance.</p>

          <span class="sub-title">Containers</span>
          <p class="content-part">We have ample experience and expertise around containerized applications. We have successfully built, migrated and maintained systems based on Docker, Kubernetes, Amazon ECS, Amazon EKS, AWS Fargate, Amazon ECR and more.</p>

          <span class="sub-title">Compute</span>
          <p class="content-part">If your system uses a more traditional non-managed approach we can help as well. Making use of Amazon EC2, Amazon EC2 Autoscaling, AWS ELB, and Amazon Cloudwatch, we can built highly resilient, scalable, and fault-tolerant systems. We have built Windows and Linux based AWS environments for businesses of all sizes, from small retail e-commerce sites to multi-national corporations with millions of visitors per month.</p>

          <span class="sub-title">DevOps</span>
          <p class="content-part">Most of our clients have embraced the speed and quality afforded by a DevOps culture, practices and tools. We have developed expertise related to building CI/CD pipelines with AWS Codepipeline, Codecommit, Codebuild and Codedeploy as well as integration with non-AWS products such as Github, Bitbucket, Gitlab, SaltStack and Jenkins.</p>

          <span class="sub-title">Consult, Build, Migrate, Maintain</span>
          <p class="content-part">When it comes to AWS, our aim is to provide an end-to-end service for our clients.</p>
          <p class="content-part">Starting from consultancy we align best practices based on the AWS Well-Architected Framework with the client's business requirements and technical constraints. Our consultants are certified as AWS Architecture Professionals and AWS DevOps Professionals, and they bring this knowledge to ensure that your project has the highest chance of success.</p>
          <p class="content-part">Our engineers build the AWS infrastructure using Infrastructure as Code principals, based on the architecture built during the consultancy phase. These engineers also back-up any client's internal teams to migrate from the old platform to the newly built platform.</p>
          <p class="content-part">Finally a thorough internal handover can be done to our support team that are available 24x7 to take care of any issues that may crop up, whilst carrying out preventive maintanence to ensure that small issues don't become critical.</p>

          <div class="single-aws-button button">
            <NuxtLink to="/contact">
              <span class="button-text">Contact Us</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  transition: 'slide-bottom',
  // The Nuxt provider to change the page title
  head() {
    return {
      title: '56Bit - AWS Service Delivery Partners',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Our Amazon Web Services Service Delivery Partnership provides a tangible endorsement and trust mark to 56Bit’s commitment'
        }
      ]
    }
  },
}
</script>