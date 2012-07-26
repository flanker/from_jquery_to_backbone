require 'sinatra'
require 'haml'
require 'json'

set :haml, :format => :html5

get '/' do
  redirect '/jquery'
end

get '/jquery' do
  haml :index
end

get '/backbone' do
  "coming soon"
end

post '/tweet/create' do
  content_type :json
  {
    :tweet => params[:tweet],
    :created_at => Time.now.strftime("%D %T")
  }.to_json
end
