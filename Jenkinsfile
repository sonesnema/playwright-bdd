pipeline {

    agent any

        
    stages {

        stage ('BuildUIAutomationTestScript') {
            steps {
                    echo "..........npm installing.........."
                    bat "npm install"
                    bat "npx playwright install"
  
        }
        }
        stage ('Run Test') {

            steps{
                bat "npm run test"
            }
        }
        // stage ('PublishAllureRpt') {
            
        //     steps {
        //             bat "echo %PATH%"
        //             allure([
        //             includeProperties: false,
        //             jdk: '',
        //             properties: [],
        //             reportBuildPolicy: 'ALWAYS',
        //             results: [[path: 'qc_automation/allure-results']]
        //     ])
		// 	}
            
}
}
  post {
      
	  always {
        archiveArtifacts artifacts: 'reports/test-results.json'
        cleanWs()
	  	    
	      
	  }
}
// }
