FROM ruby:3.0.2-alpine3.14

ENV RAILS_ENV production
ENV NODE_ENV production
ENV CLIENT_ID test
ENV CLIENT_SECRET test
ENV BUNDLE_WITHOUT development:test

RUN apk update && \
  apk add tzdata postgresql-dev && \
  apk add postgresql-client && \
  apk add build-base && \
  apk add --no-cache bash && \
  apk -U upgrade  && \  
  apk add --no-cache \
    nodejs \
    npm \
    yarn

WORKDIR /sssl_reg

COPY Gemfile .
COPY Gemfile.lock .


RUN gem install bundler
RUN bundle install --retry 3

COPY . .

RUN yarn install --check-files --production



COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
RUN RAILS_ENV=production bundle exec rake assets:precompile
CMD ["rails", "server", "-b", "0.0.0.0"]
