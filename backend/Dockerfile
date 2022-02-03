FROM ruby:3.1.0-alpine3.15

ENV RAILS_ENV production

RUN apk update && \
  apk add tzdata postgresql-dev && \
  apk add postgresql-client && \
  apk add build-base && \
  apk add --no-cache bash

WORKDIR /sssl_reg

COPY Gemfile .
COPY Gemfile.lock .

RUN gem install bundler
RUN bundle install --retry 3

COPY . .
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

CMD ["rails", "server", "-b", "0.0.0.0"]
