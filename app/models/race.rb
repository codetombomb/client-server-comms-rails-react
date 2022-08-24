class Race < ApplicationRecord
  has_many :rider_races
  has_many :riders, through: :rider_races
  belongs_to :season
  belongs_to :track
end
