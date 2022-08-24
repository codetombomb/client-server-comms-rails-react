class Team < ApplicationRecord
    has_many :riders
    has_many :races
    has_many :seasons, through: :riders
end
