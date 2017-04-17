pipeline {
  agent {
    docker {
      image 'python:3.5'
    }
    
  }
  stages {
    stage('error') {
      steps {
        sh 'env'
      }
    }
  }
}