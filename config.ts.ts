import BotConfig from "./lib-bot-config";
const cfg: BotConfig = {
  /**
	 * Azure client information.
	 */
  azure: {
	  /**
	   * Azure subscription ID in which virtual machines are running.
	   */
	  subscriptionID: "9e708654-c325-460d-9c6e-e8124e5979e1",

	  /**
	   * Azure directory ID.
	   */
	  directoryID: "68f381e3-46da-47b9-ba57-6f322b8f0da1",

	  /**
	   * Azure application ID.
	   */
	  applicationID: "2a5f7990-1adf-47c0-8e7f-3955c4f5f9dd",

	  /**
	   * Azure access token.
	   */
	  accessToken: "R0U7Q~K7Q8L95-jhJ4BleOsZucXRUfgyqGy1x",
  },

  /**
	 * MongoDB information.
	 */
  mongodb: {
	  /**
	   * A mongodb:// connection URI. 
	   */
	  connectionURI: "mongodb://dev-discord-azure-boot@127.0.0.1:29017",

	  /**
	   * Name of database in which to store bot data.
	   */
	  dbName: "dev-discord-azure-boot",
  },

	/**
	 * Discord API client information.
	 */
	discord: {
		/**
		 * If provided the command will be limited to a single Discord server. Set to null if a global command should be created.
		 */
		guildID: null,

		/**
		 * Discord API application ID.
		 */
		applicationID: "927667405394694215",
		
		/**
		 * ID of the Discord role which users must have in order to utilize the bot. Set to null to allow any user to run the command.
		 */
		permissionRoleID: null,

		/**
		 * Discord API application bot authentication token.
		 */
		botToken: "OTI3NjY3NDA1Mzk0Njk0MjE1.YdNjmA.fViV1hRWtzkuc36jU4SECjGkoIY",
	},


  /**
	 * Define the Azure virtual machines which the bot is allowed to manage. Array of objects which specify vm details.
	 */
  vms: [
	  /**
	   * Virtual machine details.
	   */
	  {
		  /**
		   * The name of the Azure resource group in which this virtual machine exists.
		   */
		  resourceGroup: "Minecraft",
		  
		  /**
		   * The name of the virtual machine in Azure.
		   */
		  azureName: "minecraft-vm",

		  /**
		   * The name which users will see and use to refer to your virtual machine. This must be unique. Try not to include words like "server" as the messages generated for users includes specifiers like this already.
		   */
		  friendlyName: "",
	  }
  ],
};
export default cfg;
