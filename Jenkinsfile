pipeline {
    agent { docker { image 'node:9.8.0-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                sh 'npm install'
            }
        }        
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
    post {
        always {
            withAWS(
                region:'eu-central-1',
                credentials:'joOfVyOeKO2mYx9f7nav98Y7SXQZKqOpZPfSe18D'
            ) {
                s3Upload(
                    file:'package.json',
                    bucket:'greg-upload-bucket',
                    path:'/upload_${BUILD_NUMBER}/'
                )
            }
        }
    }
}
