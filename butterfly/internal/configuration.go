package internal

import (
	log "github.com/sirupsen/logrus"
	"github.com/spf13/viper"
	"reflect"
	"strings"
)

type Configuration struct {
	Gin struct {
		Mode string `mapstructe:"mode"`
	} `mapstructure:"gin"`
	Postgres struct {
		URL string `mapstructe:"url"`
		Log bool   `mapstructe:"log"`
	} `mapstructure:"postgres"`
	Auth struct {
		PrivateKeyPath string `mapstructure:"private_key_path"`
		PublicKeyPath  string `mapstructure:"public_key_path"`
		Timeout        int    `mapstructure:"timeout"`
	} `mapstructure:"auth"`
}

var Default Configuration

func Init(confPath string) {
	c := Configuration{}

	viper.AutomaticEnv()
	viper.SetEnvKeyReplacer(strings.NewReplacer(".", "_"))

	viper.AddConfigPath(".")
	viper.SetConfigName("config")
	viper.SetConfigType("yml")

	if confPath == "" {
		err := viper.ReadInConfig()
		if err != nil {
			log.Panic(err, "Cannot read config file")
		} else {
			log.WithFields(log.Fields{
				"config": viper.ConfigFileUsed(),
			}).Info("Config file loaded")
		}
	} else {
		viper.SetConfigFile(confPath)
		err := viper.ReadInConfig()
		if err != nil {
			log.Panic(err, "Cannot read config file")
		} else {
			log.WithFields(log.Fields{
				"config": viper.ConfigFileUsed(),
			}).Info("Config file loaded")
		}
	}

	bindEnvs(c)

	if err := viper.Unmarshal(&c); err != nil {
		log.Panic(err, "Cannot unmarshal config")
	}

	Default = c
}

func bindEnvs(iface interface{}, parts ...string) {
	ifv := reflect.ValueOf(iface)
	ift := reflect.TypeOf(iface)
	for i := 0; i < ift.NumField(); i++ {
		v := ifv.Field(i)
		t := ift.Field(i)
		tv, ok := t.Tag.Lookup("mapstructure")
		if !ok {
			continue
		}
		switch v.Kind() {
		case reflect.Struct:
			bindEnvs(v.Interface(), append(parts, tv)...)
		default:
			if err := viper.BindEnv(strings.Join(append(parts, tv), ".")); err != nil {
				log.Fatal(err)
			}
		}
	}
}
