declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string,
      PAYLOAD_SECRET: string,
    }
  }
}

export{}