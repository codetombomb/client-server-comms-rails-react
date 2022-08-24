class CreateRiderRaces < ActiveRecord::Migration[7.0]
  def change
    create_table :rider_races do |t|
      t.references :rider, null: false, foreign_key: true
      t.references :race, null: false, foreign_key: true
      t.integer :rider_points
      t.integer :rider_position

      t.timestamps
    end
  end
end
