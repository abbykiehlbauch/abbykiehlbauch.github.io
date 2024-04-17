import {
	Card,
	View,
	Heading,
	Flex,
	Text,
  Divider
  } from '@aws-amplify/ui-react';
  import { motion } from "framer-motion";
  import '@aws-amplify/ui-react/styles.css';
  import * as React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
			{/*video banner*/}	
				{/*main three calls - with animation*/}
			<motion.div
				initial = {{opacity: 0}}
				whileInView = {{opacity:1}}
				exit = {{opacity: 0}}
				viewport={{amount: 0.5, once: false}}
			> 
				<Flex alignItems = 'center' direction = 'row' justifyContent = 'center' wrap = "wrap" margin = '1rem 0rem 1rem 0rem'>
					<View padding={'10px'}>
						<Card variation = 'elevated' width = '20rem' height = '12rem' border-top = '1px'>
							<Flex direction="column" alignItems="flex-start"  textAlign="left">
								<Divider/>
								<Heading level={5}>
									User-friendly
								</Heading>
								<Text as="span">
								The software doesn't require your clients to create an account or login, making it easy
								access for everyone regardless of their technology experience.
								</Text>
							</Flex>
						</Card>
					</View>
					<View
						padding={'10px'}
					>
						<Card width = '20rem' height = '12rem'>
							<Flex direction="column" alignItems="flex-start"  textAlign="left">
								<Divider/>
								<Heading level={5}>
									Asynchronous communication
								</Heading>
								<Text as="span">
									This software allows you to have asynchronous communication with your contacts, allowing
									for efficient and convenient communication.
								</Text>
							</Flex>
						</Card>
					</View>
					<View
						padding={'10px'}
						border-top = "1px solid #669999"
					>
						<Card width = '20rem' height = '12rem' border-top = "1px solid black">
							<Flex direction="column" alignItems="flex-start" textAlign="left">
								<Divider/>
								<Heading level={5}>
									Open Source
								</Heading>
								<Text as="span">
									This software is open source and developed using AWS services such as Amplify, Cognito, and Rekognition.
								</Text>
							</Flex>
						</Card>
					</View>
	  			</Flex>
			</motion.div>
			
			{/*service logo section*/}
			{/* <div className = 'carousel'>
				<div className = "scroll" style = {{'--t': '40s'}}>
					<div>
						<figure className='figure'>
							<img src={amplifyLogo} alt = "AWS Amplify" width = '75em'/>
						</figure>
						<figure className='figure'>
							<img src={rekognitionLogo} alt = "Rekognition"  width = '75em'/>
						</figure>
						<figure className='figure'>
							<img src={cognitoLogo}  alt = "AWS Cognito" width = '75em'/>
						</figure>
						<figure className='figure'>
							<img src={appsync} alt = "AppSync"  width = '75em'/>
						</figure>
						<figure className='figure'>
							<img src={lambda} alt = "Lambda"  width = '75em'/>
						</figure>
						<figure className='figure'>
							<img src={s3} alt = "S3 Buckets" width = '75em'/>
						</figure>
						<figure className='figure'>
							<img src={reactLogo} alt = "React" width = '75em'/>
						</figure>
					</div>
					<div>
						<figure className='figure' >
							<img src={amplifyLogo} alt = "AWS Amplify" width = '75em'/>
						</figure>
						<figure className='figure'>
							<img src={rekognitionLogo} alt = "Rekognition" width = '75em'/>
						</figure>
						<figure className='figure'>
							<img src={cognitoLogo}  alt = "AWS Cognito" width = '75em'/>
						</figure>
						<figure className='figure'>
							<img src={appsync} alt = "AppSync"  width = '75em'/>
						</figure>
						<figure className='figure'>
							<img src={lambda} alt = "Lambda"  width = '75em'/>
						</figure>
						<figure className='figure'>
							<img src={s3} alt = "S3 Buckets" width = '75em'/>
						</figure>
						<figure className='figure'>
							<img src={reactLogo} alt = "React" width = '75em'/>
						</figure>
					</div>
				</div>
			</div>	 */}
			{/*software info*/}
			<View
			padding={'10px'}
			border-top = "1px solid #669999"
			>
				<Card variation = 'elevated'>
					<Flex direction="column" alignItems="flex-start"  textAlign="left">
					<Heading level={5}>
						blur software
					</Heading>
					<Text as="span">
					The purpose of our software is to allow admins (such as doctors, managers, professors, etc.) to receive videos from users. From this we can enable asynchronized communication which allows for more efficient communication, enhancing the experience for both the user and admin. The intention of our software is to provide an easy to use, secure solution to asynchronous video sharing.
					</Text>
					</Flex>
				</Card>
			</View>
</div>

      </header>
    </div>
  );
}

export default App;
