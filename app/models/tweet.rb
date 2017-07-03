class Tweet < ApplicationRecord
  validates :text, presence: { allow_blank: true }
end
