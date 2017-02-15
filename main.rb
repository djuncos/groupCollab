require 'sinatra'


get '/' do
	erb :home
end

get '/aboutUs' do
	erb :aboutUs
end

get '/gallery' do
	erb :gallery
end

# get '/contactUs' do
# 	erb :contactUs
# end



