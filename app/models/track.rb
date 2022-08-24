class Track < ApplicationRecord
    has_many :races
    belongs_to :location
    has_many :seasons, through: :races
end
