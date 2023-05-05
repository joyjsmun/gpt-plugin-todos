/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir:true,
    },
    async hearders(){
        return [
            {
                soruce: '/:path*',
                hearders:[
                    {
                        key: 'Access-Control-Allow-Origin',
                        value:'https://chat.openai.com'

                    },
                ]
            }
        ]
    }
}

module.exports = nextConfig
