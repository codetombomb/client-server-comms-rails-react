class CreateRiders < ActiveRecord::Migration[7.0]
  def change
    create_table :riders do |t|
      t.string :first_name
      t.string :last_name
      t.integer :number
      t.string :nationality
      t.references :team, null: false, foreign_key: true
      # t.integer :team_id
      t.string :image_url

      t.timestamps
    end
  end
end
