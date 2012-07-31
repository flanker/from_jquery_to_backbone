require 'sinatra'
require "sinatra/content_for"
require "sinatra/json"
require 'haml'

set :haml, :format => :html5

get '/' do
  redirect '/jquery'
end

get '/jquery' do
  haml :jquery
end

get '/backbone' do
  haml :backbone
end

post '/tweet/create' do
  json :tweet => params[:tweet], :created_at => now
end

private

def now
  Time.now.strftime("%D %T")
end