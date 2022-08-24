class CreateRaces < ActiveRecord::Migration[7.0]
  def change
    create_table :races do |t|
      t.references :track, null: false, foreign_key: true
      t.references :season, null: false, foreign_key: true
      t.string :city
      t.string :layout_url
      t.integer :winner

      t.timestamps
    end
  end
end
