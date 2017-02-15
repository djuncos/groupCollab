require 'sinatra'
require "sendgrid-ruby"
include SendGrid

get '/' do
  erb :home
end

get '/contactUs' do
  erb :contactUs
end

post "/contactUs" do
  from = Email.new(email: params["email"])
  subject = "From Widgets Website"
  to = Email.new(email: "tyler.james.gunter@gmail.com")
  content = Content.new(type: "type/plain", value: params["body"])

  mail = Mail.new(from, subject, to, content)

  sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])

  response = sg.client.mail._('send').post(request_body: mail.to_json)

  puts response.status_code
  puts response.body
  puts response.headers

  redirect "/contactUs"
end

get '/aboutUs' do
  erb :aboutUs
end

get '/gallery' do
  erb :gallery
end

get '/contactUs' do
  erb :contactUs
end
