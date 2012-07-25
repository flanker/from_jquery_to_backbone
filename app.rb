require 'sinatra'
require 'haml'
require 'json'

set :haml, :format => :html5

get '/' do
  haml :index
end

post '/tweet/create' do
  {
    :tweet => params[:tweet],
    :created_at => Time.now.strftime("%D %R")
  }.to_json
end
