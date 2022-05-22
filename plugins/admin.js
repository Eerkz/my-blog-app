import * as admin from 'firebase-admin'
import config from '../my-blog-app-da863-firebase-adminsdk-onoas-c130ef3968.json'

if (!admin.apps.length){
  admin.initializeApp({
    credential: admin.credential.cert(config),
  })
}

export { admin }