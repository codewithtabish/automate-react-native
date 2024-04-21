import { Client, Account, ID } from 'react-native-appwrite';
export const appWriteConfig={
    endpoint: "https://api.appwrite.io/v1",
    projectId: "6624e2d135bef28e2675",
    platform:"com.tabish.aora",
    databaseId:"6624e602ccea0a3dd937",
    userCollectionId:"6624e647e4752cba92eb",
    videoCollectionId:"6624e602ccea0a3dd937",
    storageId:"6624f240bfa718c4e44a"
}



let client;
let account;

client = new Client();
client
  .setEndpoint(appWriteConfig.endpoint)
  .setProject(appWriteConfig.projectId)
  .setPlatform(appWriteConfig.platform);

account = new Account(client)


 export async function register(email, password, name) {
  try {
     const response= await account.create(ID.unique(), email, password, name)
     console.log(response)
  } catch (error) {
    console.log('The error is ',error)
    
  }
    // await login(email, password);
    // setLoggedInUser(await account.get());
  }
