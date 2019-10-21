class CreateOscillatorsynths < ActiveRecord::Migration[6.0]
  def change
    create_table :oscillatorsynths do |t|
      t.integer :frequency
      t.string :wave
      t.integer :detune

      t.timestamps
    end
  end
end
