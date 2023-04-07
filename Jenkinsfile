pipeline {
    agent { docker { image 'node:14-alpine' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('build') {
            steps {
        sh "npm install"
        sh "npm start"
}
        }
    }
}
