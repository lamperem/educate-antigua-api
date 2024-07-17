import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFactory1721227521066 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            
            -- tables
            CREATE TABLE IF NOT EXISTS "course_details" (
                "course_detail_id" SERIAL PRIMARY KEY,
                "code" TEXT NOT NULL,
                "area" INTEGER DEFAULT 160000,
                "name" TEXT NOT NULL,
                "description" TEXT NOT NULL,
                
                "created_by" INTEGER DEFAULT 1,
                "creation_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "modified_by" INTEGER DEFAULT 1,
                "modification_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "status" INTEGER DEFAULT 160002
            );

            COMMENT ON COLUMN "course_details"."course_detail_id" IS 'ID de detalle de curso';
            COMMENT ON COLUMN "course_details"."code" IS 'Código de curso';
            COMMENT ON COLUMN "course_details"."area" IS 'Areá la que pertenece el curso';
            COMMENT ON COLUMN "course_details"."name" IS 'Nombre del curso';
            COMMENT ON COLUMN "course_details"."description" IS 'Descripción del curso';

            COMMENT ON COLUMN "course_details"."created_by" IS 'Id de usuario';
            COMMENT ON COLUMN "course_details"."creation_date" IS 'Fecha de creación';
            COMMENT ON COLUMN "course_details"."modified_by" IS 'Id de usuario';
            COMMENT ON COLUMN "course_details"."modification_date" IS 'Fecha de modificación';
            COMMENT ON COLUMN "course_details"."status" IS 'Id de tipología';

            CREATE TABLE IF NOT EXISTS "logs" (
                "log_id" SERIAL PRIMARY KEY,
                "origin" TEXT NOT NULL,
                "level" INTEGER DEFAULT 160000,
                "description" TEXT NOT NULL,
                "data" TEXT,
                "created_by" INTEGER DEFAULT 1,
                "creation_date" TIMESTAMP NOT NULL DEFAULT NOW()
            );

            COMMENT ON COLUMN "logs"."log_id" IS 'Id de log';
            COMMENT ON COLUMN "logs"."origin" IS 'Nombre del servicio asociado';
            COMMENT ON COLUMN "logs"."level" IS 'Tipo de log';
            COMMENT ON COLUMN "logs"."description" IS 'Descripción del log';
            COMMENT ON COLUMN "logs"."data" IS 'Data del log';

            COMMENT ON COLUMN "logs"."created_by" IS 'Id de usuario';
            COMMENT ON COLUMN "logs"."creation_date" IS 'Fecha de creación';

            CREATE TABLE IF NOT EXISTS "persons" (
                "person_id" SERIAL PRIMARY KEY,
                "dni" TEXT NOT NULL,
                "dni_type" INTEGER DEFAULT 160000,
                "name" TEXT NOT NULL,
                "surname" TEXT NOT NULL,
                "dob" TEXT NOT NULL,
                "gender" INTEGER DEFAULT 160000,
                "marital_status" INTEGER DEFAULT 160000,
                "is_foreign" BOOLEAN NOT NULL DEFAULT FALSE,
                "is_minor" BOOLEAN NOT NULL DEFAULT FALSE,
                "address_country_iso" INTEGER DEFAULT 160000,
                "address_local_state" INTEGER DEFAULT 160000,
                "address_local_city" INTEGER DEFAULT 160000,
                "address_local_zone" INTEGER DEFAULT 160000,
                "contact_email" TEXT NOT NULL,
                "contact_phone" TEXT NOT NULL,
                
                "created_by" INTEGER DEFAULT 1,
                "creation_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "modified_by" INTEGER DEFAULT 1,
                "modification_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "status" INTEGER DEFAULT 160002
            );

            COMMENT ON COLUMN "persons"."person_id" IS 'Id de persona';
            COMMENT ON COLUMN "persons"."dni" IS 'Documento nacional de identificación';
            COMMENT ON COLUMN "persons"."dni_type" IS 'Tipo de documento de identificación';
            COMMENT ON COLUMN "persons"."name" IS 'Nombre';
            COMMENT ON COLUMN "persons"."surname" IS 'Apellido';
            COMMENT ON COLUMN "persons"."dob" IS 'Fecha de nacimiento';
            COMMENT ON COLUMN "persons"."gender" IS 'Genero';
            COMMENT ON COLUMN "persons"."marital_status" IS 'Estado Civil';
            COMMENT ON COLUMN "persons"."is_foreign" IS 'Es estranjero';
            COMMENT ON COLUMN "persons"."is_minor" IS 'Es menor de edad';
            COMMENT ON COLUMN "persons"."address_country_iso" IS 'Código de país';
            COMMENT ON COLUMN "persons"."address_local_state" IS 'Departamento';
            COMMENT ON COLUMN "persons"."address_local_city" IS 'Municipio';
            COMMENT ON COLUMN "persons"."address_local_zone" IS 'Zona';
            COMMENT ON COLUMN "persons"."contact_email" IS 'Correo electrónico';
            COMMENT ON COLUMN "persons"."contact_phone" IS 'Número de telefóno';

            COMMENT ON COLUMN "persons"."created_by" IS 'Id de usuario';
            COMMENT ON COLUMN "persons"."creation_date" IS 'Fecha de creación';
            COMMENT ON COLUMN "persons"."modified_by" IS 'Id de usuario';
            COMMENT ON COLUMN "persons"."modification_date" IS 'Fecha de modificación';
            COMMENT ON COLUMN "persons"."status" IS 'Id de tipología';

            CREATE TABLE IF NOT EXISTS "system_logs" (
                "system_log_id" SERIAL PRIMARY KEY,
                "table_name" TEXT NOT NULL,
                "table_value" TEXT NOT NULL,
                "old_data" TEXT,
                "new_data" TEXT NOT NULL,
                "description" TEXT NOT NULL DEFAULT 'Nuevo registro',
                "event_type" INTEGER DEFAULT 160000,
                "created_by" INTEGER DEFAULT 1,
                "creation_date" TIMESTAMP NOT NULL DEFAULT NOW()
            );

            COMMENT ON COLUMN "system_logs"."system_log_id" IS 'Id de log del sistema';
            COMMENT ON COLUMN "system_logs"."table_name" IS 'Nombre de la tabla';
            COMMENT ON COLUMN "system_logs"."table_value" IS 'Valor del registro afectado';
            COMMENT ON COLUMN "system_logs"."old_data" IS 'Información original';
            COMMENT ON COLUMN "system_logs"."new_data" IS 'Información modificada';
            COMMENT ON COLUMN "system_logs"."description" IS 'Tipo de acción';
            COMMENT ON COLUMN "system_logs"."event_type" IS 'Tipo de evento';

            COMMENT ON COLUMN "system_logs"."created_by" IS 'Id de usuario';
            COMMENT ON COLUMN "system_logs"."creation_date" IS 'Fecha de creación';

            CREATE TABLE IF NOT EXISTS "typologies" (
                "typology_id" SERIAL PRIMARY KEY,
                "description" TEXT NOT NULL,
                "value_1" TEXT,
                "value_2" TEXT,
                "value_3" TEXT,
                "parent_typology" INTEGER DEFAULT 100,
                
                "created_by" INTEGER DEFAULT 1,
                "creation_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "modified_by" INTEGER DEFAULT 1,
                "modification_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "status" INTEGER DEFAULT 160002
            );

            CREATE INDEX "idx_typologies__parent_typology" ON "typologies" ("parent_typology");

            ALTER TABLE "typologies" ADD CONSTRAINT "fk_typologies__parent_typology" FOREIGN KEY ("parent_typology") REFERENCES "typologies" ("typology_id");

            COMMENT ON COLUMN "typologies"."typology_id" IS 'Id de tipología';
            COMMENT ON COLUMN "typologies"."description" IS 'Descripción de tipologia';
            COMMENT ON COLUMN "typologies"."value_1" IS 'Valor 1';
            COMMENT ON COLUMN "typologies"."value_2" IS 'Valor 2';
            COMMENT ON COLUMN "typologies"."value_3" IS 'VAlor 3';
            COMMENT ON COLUMN "typologies"."parent_typology" IS 'Id de tipología asociada';

            COMMENT ON COLUMN "typologies"."created_by" IS 'Id de usuario';
            COMMENT ON COLUMN "typologies"."creation_date" IS 'Fecha de creación';
            COMMENT ON COLUMN "typologies"."modified_by" IS 'Id de usuario';
            COMMENT ON COLUMN "typologies"."modification_date" IS 'Fecha de modificación';
            COMMENT ON COLUMN "typologies"."status" IS 'Id de tipología';

            CREATE TABLE IF NOT EXISTS "users" (
                "user_id" SERIAL PRIMARY KEY,
                "username" TEXT NOT NULL,
                "password" TEXT NOT NULL,
                "password_hash" TEXT NOT NULL,
                "avatar" TEXT,
                "role" INTEGER DEFAULT 160000,
                
                "created_by" INTEGER DEFAULT 1,
                "creation_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "modified_by" INTEGER DEFAULT 1,
                "modification_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "status" INTEGER DEFAULT 160002
            );

            COMMENT ON COLUMN "users"."user_id" IS 'Id de usuario';
            COMMENT ON COLUMN "users"."username" IS 'Nombre de usuario';
            COMMENT ON COLUMN "users"."password" IS 'Contraseña';
            COMMENT ON COLUMN "users"."password_hash" IS 'Hash de contraseña';
            COMMENT ON COLUMN "users"."avatar" IS 'Avatar';
            COMMENT ON COLUMN "users"."role" IS 'Rol del usuario';

            COMMENT ON COLUMN "users"."created_by" IS 'Id de usuario';
            COMMENT ON COLUMN "users"."creation_date" IS 'Fecha de creación';
            COMMENT ON COLUMN "users"."modified_by" IS 'Id de usuario';
            COMMENT ON COLUMN "users"."modification_date" IS 'Fecha de modificación';
            COMMENT ON COLUMN "users"."status" IS 'Id de tipología';

            CREATE TABLE IF NOT EXISTS "students" (
                "student_id" SERIAL PRIMARY KEY,
                "code" TEXT NOT NULL,
                "type" INTEGER NOT NULL,
                "person_id" INTEGER NOT NULL,
                "manager_person_id" INTEGER,
                "user_id" INTEGER,
                
                "created_by" INTEGER DEFAULT 1,
                "creation_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "modified_by" INTEGER DEFAULT 1,
                "modification_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "status" INTEGER DEFAULT 160002
            );

            CREATE INDEX "idx_students__manager_person_id" ON "students" ("manager_person_id");

            CREATE INDEX "idx_students__person_id" ON "students" ("person_id");

            CREATE INDEX "idx_students__user_id" ON "students" ("user_id");

            ALTER TABLE "students" ADD CONSTRAINT "fk_students__manager_person_id" FOREIGN KEY ("manager_person_id") REFERENCES "persons" ("person_id");

            ALTER TABLE "students" ADD CONSTRAINT "fk_students__person_id" FOREIGN KEY ("person_id") REFERENCES "persons" ("person_id");

            ALTER TABLE "students" ADD CONSTRAINT "fk_students__user_id" FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

            COMMENT ON COLUMN "students"."student_id" IS 'Id de estudiante';
            COMMENT ON COLUMN "students"."code" IS 'Código de estudiante';
            COMMENT ON COLUMN "students"."type" IS 'Tipo de estudiante';
            COMMENT ON COLUMN "students"."person_id" IS 'Id de persona';
            COMMENT ON COLUMN "students"."manager_person_id" IS 'Id de persona encargada';
            COMMENT ON COLUMN "students"."user_id" IS 'Id de usuario';

            COMMENT ON COLUMN "students"."created_by" IS 'Id de usuario';
            COMMENT ON COLUMN "students"."creation_date" IS 'Fecha de creación';
            COMMENT ON COLUMN "students"."modified_by" IS 'Id de usuario';
            COMMENT ON COLUMN "students"."modification_date" IS 'Fecha de modificación';
            COMMENT ON COLUMN "students"."status" IS 'Id de tipología';

            CREATE TABLE IF NOT EXISTS "teachers" (
                "teacher_id" SERIAL PRIMARY KEY,
                "code" TEXT NOT NULL,
                "person_id" INTEGER NOT NULL,
                "user_id" INTEGER,
                
                "created_by" INTEGER DEFAULT 1,
                "creation_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "modified_by" INTEGER DEFAULT 1,
                "modification_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "status" INTEGER DEFAULT 160002
            );

            CREATE INDEX "idx_teachers__person_id" ON "teachers" ("person_id");

            CREATE INDEX "idx_teachers__user_id" ON "teachers" ("user_id");

            ALTER TABLE "teachers" ADD CONSTRAINT "fk_teachers__person_id" FOREIGN KEY ("person_id") REFERENCES "persons" ("person_id");

            ALTER TABLE "teachers" ADD CONSTRAINT "fk_teachers__user_id" FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

            COMMENT ON COLUMN "teachers"."teacher_id" IS 'Id de docente';
            COMMENT ON COLUMN "teachers"."code" IS 'Código de docente';
            COMMENT ON COLUMN "teachers"."person_id" IS 'Id de persona';
            COMMENT ON COLUMN "teachers"."user_id" IS 'Id de usuario';

            COMMENT ON COLUMN "teachers"."created_by" IS 'Id de usuario';
            COMMENT ON COLUMN "teachers"."creation_date" IS 'Fecha de creación';
            COMMENT ON COLUMN "teachers"."modified_by" IS 'Id de usuario';
            COMMENT ON COLUMN "teachers"."modification_date" IS 'Fecha de modificación';
            COMMENT ON COLUMN "teachers"."status" IS 'Id de tipología';

            CREATE TABLE IF NOT EXISTS "courses" (
                "course_id" SERIAL PRIMARY KEY,
                "course_detail_id" INTEGER NOT NULL,
                "teacher_id" INTEGER NOT NULL,
                "modality" INTEGER DEFAULT 160000,
                "campus" INTEGER DEFAULT 160000,
                "classroom" TEXT NOT NULL,
                "schedule" TEXT NOT NULL,
                "monthly_rate" DECIMAL(12, 2) DEFAULT '0'::NUMERIC,
                "open_date" TIMESTAMP NOT NULL,
                "close_date" TIMESTAMP,
                
                "created_by" INTEGER DEFAULT 1,
                "creation_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "modified_by" INTEGER DEFAULT 1,
                "modification_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "status" INTEGER DEFAULT 160002
            );

            CREATE INDEX "idx_courses__course_detail_id" ON "courses" ("course_detail_id");

            CREATE INDEX "idx_courses__teacher_id" ON "courses" ("teacher_id");

            ALTER TABLE "courses" ADD CONSTRAINT "fk_courses__course_detail_id" FOREIGN KEY ("course_detail_id") REFERENCES "course_details" ("course_detail_id");

            ALTER TABLE "courses" ADD CONSTRAINT "fk_courses__teacher_id" FOREIGN KEY ("teacher_id") REFERENCES "teachers" ("teacher_id");

            COMMENT ON COLUMN "courses"."course_id" IS 'Id de curso';
            COMMENT ON COLUMN "courses"."course_detail_id" IS 'Id de detalle de curso';
            COMMENT ON COLUMN "courses"."teacher_id" IS 'Id de docente';
            COMMENT ON COLUMN "courses"."modality" IS 'Modalidad del curso';
            COMMENT ON COLUMN "courses"."campus" IS 'Sede del curso';
            COMMENT ON COLUMN "courses"."classroom" IS 'Sección del curso';
            COMMENT ON COLUMN "courses"."schedule" IS 'Horario del curso';
            COMMENT ON COLUMN "courses"."monthly_rate" IS 'Pago mensual';
            COMMENT ON COLUMN "courses"."open_date" IS 'Fecha de apertura del curso';
            COMMENT ON COLUMN "courses"."close_date" IS 'Fecha de cierra del curso';

            COMMENT ON COLUMN "courses"."created_by" IS 'Id de usuario';
            COMMENT ON COLUMN "courses"."creation_date" IS 'Fecha de creación';
            COMMENT ON COLUMN "courses"."modified_by" IS 'Id de usuario';
            COMMENT ON COLUMN "courses"."modification_date" IS 'Fecha de modificación';
            COMMENT ON COLUMN "courses"."status" IS 'Id de tipología';

            CREATE TABLE IF NOT EXISTS "inscriptions" (
                "inscription_id" SERIAL PRIMARY KEY,
                "course_id" INTEGER NOT NULL,
                "student_id" INTEGER NOT NULL,
                
                "created_by" INTEGER DEFAULT 1,
                "creation_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "modified_by" INTEGER DEFAULT 1,
                "modification_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "status" INTEGER DEFAULT 160002
            );

            CREATE INDEX "idx_inscriptions__course_id" ON "inscriptions" ("course_id");

            CREATE INDEX "idx_inscriptions__student_id" ON "inscriptions" ("student_id");

            ALTER TABLE "inscriptions" ADD CONSTRAINT "fk_inscriptions__course_id" FOREIGN KEY ("course_id") REFERENCES "courses" ("course_id");

            ALTER TABLE "inscriptions" ADD CONSTRAINT "fk_inscriptions__student_id" FOREIGN KEY ("student_id") REFERENCES "students" ("student_id");

            COMMENT ON COLUMN "inscriptions"."inscription_id" IS 'Id de inscripción';
            COMMENT ON COLUMN "inscriptions"."course_id" IS 'Id de curso';
            COMMENT ON COLUMN "inscriptions"."student_id" IS 'Id de estudiante';

            COMMENT ON COLUMN "inscriptions"."created_by" IS 'Id de usuario';
            COMMENT ON COLUMN "inscriptions"."creation_date" IS 'Fecha de creación';
            COMMENT ON COLUMN "inscriptions"."modified_by" IS 'Id de usuario';
            COMMENT ON COLUMN "inscriptions"."modification_date" IS 'Fecha de modificación';
            COMMENT ON COLUMN "inscriptions"."status" IS 'Id de tipología';

            CREATE TABLE IF NOT EXISTS "attendances" (
                "attendance_id" SERIAL PRIMARY KEY,
                "inscription_id" INTEGER NOT NULL,
                "student_id" INTEGER NOT NULL,
                "is_present" BOOLEAN NOT NULL DEFAULT FALSE,
                "reason" TEXT,
                
                "created_by" INTEGER DEFAULT 1,
                "creation_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "modified_by" INTEGER DEFAULT 1,
                "modification_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "status" INTEGER DEFAULT 160002
            );

            CREATE INDEX "idx_attendances__inscription_id" ON "attendances" ("inscription_id");

            CREATE INDEX "idx_attendances__student_id" ON "attendances" ("student_id");

            ALTER TABLE "attendances" ADD CONSTRAINT "fk_attendances__inscription_id" FOREIGN KEY ("inscription_id") REFERENCES "inscriptions" ("inscription_id");

            ALTER TABLE "attendances" ADD CONSTRAINT "fk_attendances__student_id" FOREIGN KEY ("student_id") REFERENCES "students" ("student_id");

            COMMENT ON COLUMN "attendances"."attendance_id" IS 'Id de asistencia al curso';
            COMMENT ON COLUMN "attendances"."inscription_id" IS 'Id de inscripción';
            COMMENT ON COLUMN "attendances"."student_id" IS 'Id de estudiante';
            COMMENT ON COLUMN "attendances"."is_present" IS 'Asistio al curso';
            COMMENT ON COLUMN "attendances"."reason" IS 'Razón por la que no asistio al curso';

            COMMENT ON COLUMN "attendances"."created_by" IS 'Id de usuario';
            COMMENT ON COLUMN "attendances"."creation_date" IS 'Fecha de creación';
            COMMENT ON COLUMN "attendances"."modified_by" IS 'Id de usuario';
            COMMENT ON COLUMN "attendances"."modification_date" IS 'Fecha de modificación';
            COMMENT ON COLUMN "attendances"."status" IS 'Id de tipología';

            CREATE TABLE IF NOT EXISTS "transactions" (
                "transaction_id" SERIAL PRIMARY KEY,
                "identifier" UUID NOT NULL DEFAULT '00000000-0000-0000-0000-000000000000',
                "inscription_id" INTEGER NOT NULL,
                "student_id" INTEGER NOT NULL,
                "voucher" TEXT,
                "total_amount" DECIMAL(12, 2) DEFAULT '0'::NUMERIC,
                "discount" DECIMAL(12, 2) DEFAULT '0'::NUMERIC,
                
                "created_by" INTEGER DEFAULT 1,
                "creation_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "modified_by" INTEGER DEFAULT 1,
                "modification_date" TIMESTAMP NOT NULL DEFAULT NOW(),
                "status" INTEGER DEFAULT 160002
            );

            CREATE INDEX "idx_transactions__inscription_id" ON "transactions" ("inscription_id");

            CREATE INDEX "idx_transactions__student_id" ON "transactions" ("student_id");

            ALTER TABLE "transactions" ADD CONSTRAINT "fk_transactions__inscription_id" FOREIGN KEY ("inscription_id") REFERENCES "inscriptions" ("inscription_id");

            ALTER TABLE "transactions" ADD CONSTRAINT "fk_transactions__student_id" FOREIGN KEY ("student_id") REFERENCES "students" ("student_id");

            COMMENT ON COLUMN "transactions"."transaction_id" IS 'Id de transacción';
            COMMENT ON COLUMN "transactions"."identifier" IS 'Identificador de la transacción';
            COMMENT ON COLUMN "transactions"."inscription_id" IS 'Id de inscripción';
            COMMENT ON COLUMN "transactions"."student_id" IS 'Id de estudiante';
            COMMENT ON COLUMN "transactions"."voucher" IS 'Comprobante de pago';
            COMMENT ON COLUMN "transactions"."total_amount" IS 'Monto de la mensualidad';
            COMMENT ON COLUMN "transactions"."discount" IS 'Descuento de la mensualidad';

            COMMENT ON COLUMN "transactions"."created_by" IS 'Id de usuario';
            COMMENT ON COLUMN "transactions"."creation_date" IS 'Fecha de creación';
            COMMENT ON COLUMN "transactions"."modified_by" IS 'Id de usuario';
            COMMENT ON COLUMN "transactions"."modification_date" IS 'Fecha de modificación';
            COMMENT ON COLUMN "transactions"."status" IS 'Id de tipología';

            -- audit
            CREATE OR REPLACE FUNCTION get_primary_key(text)
            RETURNS name LANGUAGE sql IMMUTABLE AS $$
                SELECT a.attname
                FROM   pg_index i
                JOIN   pg_attribute a ON a.attrelid = i.indrelid AND a.attnum = ANY(i.indkey)
                WHERE
                    i.indrelid = $1::regclass AND i.indisprimary;
            $$;

            CREATE OR REPLACE FUNCTION jsonb_diff_old(jsonb, jsonb)
            RETURNS jsonb LANGUAGE sql IMMUTABLE AS $$
                SELECT jsonb_object_agg(o.key, o.value)
                FROM jsonb_each($1) o
                JOIN jsonb_each($2) n ON o.key = n.key
                WHERE o.value <> n.value;
            $$;

            CREATE OR REPLACE FUNCTION jsonb_diff_new(jsonb, jsonb)
            RETURNS jsonb LANGUAGE sql IMMUTABLE AS $$
                SELECT jsonb_object_agg(n.key, n.value)
                FROM jsonb_each($1) o
                JOIN jsonb_each($2) n ON o.key = n.key
                WHERE o.value <> n.value;
            $$; 

            CREATE OR REPLACE FUNCTION system_logs_trigger_func()
            RETURNS trigger AS $$
                DECLARE
                    id_name text;
                    id_value text;
                BEGIN
                    id_name := get_primary_key(TG_TABLE_NAME::regclass::text);
                    id_value := to_jsonb(NEW)::json->>id_name;

                    if (TG_OP = 'INSERT') then
                        INSERT INTO system_logs (
                            table_name,
                            table_value,
                            new_data,
                            description,
                            event_type,
                            created_by
                        )
                        VALUES(
                            TG_TABLE_NAME::regclass::text,
                            id_value::integer,
                            to_jsonb(NEW),
                            'Nuevo registro',
                            160063,
                            NEW.created_by
                        );
                                
                        RETURN NEW;
                    elsif (TG_OP = 'UPDATE') then
                        INSERT INTO system_logs (
                            table_name,
                            table_value,
                            old_data,
                            new_data,
                            event_type,
                            created_by
                        )
                        VALUES(
                            TG_TABLE_NAME::regclass::text,
                            id_value::integer,
                            jsonb_diff_old(to_jsonb(OLD), to_jsonb(NEW)),
                            jsonb_diff_new(to_jsonb(OLD), to_jsonb(NEW)),
                            160064,
                            NEW.modified_by
                        );
                                
                        RETURN NEW;
                    end if;
                END;
                $$ LANGUAGE plpgsql;

            -- triggers
            CREATE TRIGGER course_details_trigger
            AFTER INSERT OR UPDATE ON course_details
            FOR EACH ROW EXECUTE FUNCTION system_logs_trigger_func();

            CREATE TRIGGER persons_trigger
            AFTER INSERT OR UPDATE ON persons
            FOR EACH ROW EXECUTE FUNCTION system_logs_trigger_func();

            CREATE TRIGGER typologies_trigger
            AFTER INSERT OR UPDATE ON typologies
            FOR EACH ROW EXECUTE FUNCTION system_logs_trigger_func();

            CREATE TRIGGER users_trigger
            AFTER INSERT OR UPDATE ON users
            FOR EACH ROW EXECUTE FUNCTION system_logs_trigger_func();

            CREATE TRIGGER students_trigger
            AFTER INSERT OR UPDATE ON students
            FOR EACH ROW EXECUTE FUNCTION system_logs_trigger_func();

            CREATE TRIGGER teachers_trigger
            AFTER INSERT OR UPDATE ON teachers
            FOR EACH ROW EXECUTE FUNCTION system_logs_trigger_func();

            CREATE TRIGGER courses_trigger
            AFTER INSERT OR UPDATE ON courses
            FOR EACH ROW EXECUTE FUNCTION system_logs_trigger_func();

            CREATE TRIGGER inscriptions_trigger
            AFTER INSERT OR UPDATE ON inscriptions
            FOR EACH ROW EXECUTE FUNCTION system_logs_trigger_func();

            CREATE TRIGGER attendances_trigger
            AFTER INSERT OR UPDATE ON attendances
            FOR EACH ROW EXECUTE FUNCTION system_logs_trigger_func();

            CREATE TRIGGER transactions_trigger
            AFTER INSERT OR UPDATE ON transactions
            FOR EACH ROW EXECUTE FUNCTION system_logs_trigger_func();

        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> { }

}
