pipeline {

    agent any
    environment {
        
    }
        
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
        //  stage('Copy Artifacts') {
        //     steps {
        //         copyArtifacts(
        //             projectName: 'source-project',
        //             selector: lastSuccessful(),
        //             target: 'target-directory'
        //         )
        //     }
        cleanWs()
	  	    // emailext body: '''${SCRIPT, template="allure-report.groovy"}''',
			// 		subject: "QC Automation -${env.JOB_NAME}",
			// 		 to: "akpoonraj@rfxcel.com, kiruba@rfxcel.com, c_ckusumba@innominds.com, bdasari@innominds.com"
		    // powershell "Remove-Item -Recurse -Force qc_automation/RTS7UI_Playwright_Automation/*"	
	      
	  }
}
// }
