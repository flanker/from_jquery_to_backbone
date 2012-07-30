require 'sinatra'
require 'haml'
require 'json'

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
  content_type :json
  {
    :tweet => params[:tweet],
    :created_at => Time.now.strftime("%D %T")
  }.to_json
end
