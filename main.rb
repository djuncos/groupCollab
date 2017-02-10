require 'sinatra'

get '/' do
	erb :home
end

get '/aboutUs' do
	erb :aboutUs
end