class CreateTracks < ActiveRecord::Migration[7.0]
  def change
    create_table :tracks do |t|
      t.string :layout_url
      t.references :location, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
