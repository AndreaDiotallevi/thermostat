require 'sinatra/base'
require 'json'

class Thermostat < Sinatra::Base
  enable :sessions

  get "/" do
    session[:temperature] ||= 20
    session[:is_power_saving_mode_on] ||= true
    session[:city] ||= "London"
    erb :index
  end

  post "/temperature" do
    session[:temperature] = params[:temperature].to_i
    session[:is_power_saving_mode_on] = params[:isPowerSavingModeOn]
    session[:city] = params[:city]
  end

  get "/temperature" do
    content_type :json
    { "temperature": session[:temperature],
      "isPowerSavingModeOn": session[:is_power_saving_mode_on],
      "city": session[:city]
    }.to_json
  end

  run! if app_file == $0
end
